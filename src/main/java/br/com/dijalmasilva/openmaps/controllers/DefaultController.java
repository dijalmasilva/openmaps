package br.com.dijalmasilva.openmaps.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by <a href="http://dijalmasilva.github.io" target="_blank"> Dijalma Silva </a> on 05/07/17.
 */
@Controller
public class DefaultController {

    @GetMapping("/")
    String getIndex() {
        return "index";
    }
}
