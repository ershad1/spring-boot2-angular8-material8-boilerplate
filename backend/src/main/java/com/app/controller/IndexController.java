package com.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Returns index pag
 */
@Controller
public class IndexController {

    /**
     * @return index page
     */
    @GetMapping({"/"})
    public String index() {
        return "forward:index.html";
    }

}
