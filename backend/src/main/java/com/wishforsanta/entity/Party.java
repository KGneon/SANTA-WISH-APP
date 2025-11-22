package com.wishforsanta.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDateTime;
import java.util.List;

@Entity
public class Party {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String partyName;
    private LocalDateTime partyDate;
    private int giftPriceFrom;
    private int giftPriceTo;
    private List<SantaLotery> listOfLoteries;
    private List<Participant> listOfParticipants;

}
