package com.mycompany.library.service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.jpa.domain.Specifications;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.mycompany.library.entity.Book;
import com.mycompany.library.repository.BookRepository;
import com.mycompany.library.repository.BookSpecification;
import com.mycompany.library.repository.SearchCriteria;

@RestController
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    @GetMapping("/bookCount")
    @ResponseBody
    public long countAll() {
        return bookRepository.count();
    }

    @GetMapping("/books")
    @ResponseBody
    public List<Book> find(@RequestParam(value = "page_number", required = true) int pageNumber,
        @RequestParam(value = "page_size", required = true) int pageSize,
        @RequestParam(value = "sort_by", required = false) String sortField,
        @RequestParam(value = "sort_order", required = false) Integer sortOrder,
        @RequestParam(value = "filter", required = false) String filter) {

        PageRequest page = null;

        if (sortField != null) {
            page = PageRequest.of(pageNumber, pageSize, Sort.by(sortOrder > 0 ? Direction.ASC : Direction.DESC, sortField));
        } else {
            page = PageRequest.of(pageNumber, pageSize);
        }

        if (filter != null) {
            filter = filter.replace("[", "").replace("]", "");
        }

        if (filter == null || filter.isEmpty()) {
            return bookRepository.findAll(page).getContent();
        }
        return bookRepository.findAll(toSpecifications(filter), page).getContent();
    }

    @PostMapping(path = "/saveBook", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void save(@RequestBody Book book) {
        bookRepository.saveAndFlush(book);
    }

    @PostMapping(path = "/deleteBook")
    public void delete(@RequestParam(value = "id", required = true) Long id) {
        bookRepository.deleteById(id);
    }

    @SuppressWarnings("deprecation")
    private Specifications<Book> toSpecifications(String filter) {

        List<BookSpecification> filterSpecifications = Arrays.stream(filter.split(","))
            .map(element -> BookSpecification.of(SearchCriteria.of(element.split("=")[0], "like", element.split("=")[1])))
            .collect(Collectors.toList());

        Specifications<Book> bookSpecifications = null;

        for (BookSpecification bookSpecification : filterSpecifications) {
            if (bookSpecifications == null) {
                bookSpecifications = Specifications.where(bookSpecification);
            } else {
                bookSpecifications.and(bookSpecification);
            }
        }

        return bookSpecifications;
    }
}
