package com.crud.controller

import javax.inject.{Inject, Singleton}

import com.crud.model.Genre
import com.crud.service.GenreService
import com.twitter.finagle.http.Request
import com.twitter.finatra.http.Controller

/**
  * @author Sem Babenko.
  */
@Singleton
class GenreController @Inject()(genreService: GenreService) extends Controller{

  get("/genres/demo") { request: Request =>
    info("genres")
    genreService.demo()
  }

  get("/genres") { request: Request =>
    info("genres")
    genreService.getAll()
  }

  post("/genres") { genre: Genre =>
    info("genres")
    genreService.insert(genre)
    response.created
  }

}
