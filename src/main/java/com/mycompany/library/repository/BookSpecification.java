package com.mycompany.library.repository;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;

import com.mycompany.library.entity.Book;

public class BookSpecification implements Specification<Book> {
    private static final long serialVersionUID = 1L;

    private final SearchCriteria searchCriteria;

    private BookSpecification(SearchCriteria searchCriteria) {
        this.searchCriteria = searchCriteria;
    }

    public static BookSpecification of(SearchCriteria searchCriteria) {
        return new BookSpecification(searchCriteria);
    }

    @Override
    public Predicate toPredicate(Root<Book> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
        if ("like".equals(searchCriteria.operation)) {
            return criteriaBuilder.like(criteriaBuilder.lower(root.get(searchCriteria.key)), "%" + searchCriteria.value + "%");
        }
        return null;
    }
}