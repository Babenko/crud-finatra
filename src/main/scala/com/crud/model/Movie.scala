package com.crud.model

/**
  * Created by Sem Babenko on 05.05.2017.
  */
case class Movie(name:String, description:String, genreId: Int, id: Option[Int] = None)
