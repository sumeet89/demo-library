package com.mycompany.library.repository;

public class SearchCriteria {

    public final String key;
    public final String operation;
    public final Object value;

    private SearchCriteria(String key, String operation, Object value) {
        this.key = key;
        this.operation = operation;
        this.value = value;
    }

    public static SearchCriteria of(String key, String operation, Object value) {
        return new SearchCriteria(key, operation, value);
    }
}