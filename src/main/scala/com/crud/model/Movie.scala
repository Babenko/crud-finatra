package com.crud.model

import com.fasterxml.jackson.annotation.JsonProperty

/**
  * Created by Sem Babenko on 05.05.2017.
  */
case class Movie(name:String, description:String, @JsonProperty("genreId") genreId: Int, id: Option[Int] = None)
