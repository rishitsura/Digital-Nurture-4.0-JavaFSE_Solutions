package com.cognizant.spring_learn.service;

import com.cognizant.spring_learn.model.Country;


import java.util.List;

public class Countries {

    private List<Country> country;

    public List<Country> getCountry() {
        return country;
    }

    public void setCountry(List<Country> country) {
        this.country = country;
    }
}
