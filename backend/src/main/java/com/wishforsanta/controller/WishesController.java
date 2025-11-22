package com.wishforsanta.controller;

import com.wishforsanta.entity.Wish;
import com.wishforsanta.service.WishServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/wishes")
public class WishesController {

    private WishServiceImpl wishService;

    public WishesController(WishServiceImpl wishService) {
        this.wishService = wishService;
    }

    @GetMapping("/getAll/{partyId}")
    public ResponseEntity<List<Wish>> getAllWishesForTheParty(@PathVariable("partyId") Long partyId){
        List<Wish> listOfWishes = wishService.getAllWishesByPartyId("partyId");
        return new ResponseEntity<>(new ResponseDto());
    }
}
