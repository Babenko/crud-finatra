package com.crud.controller

import javax.inject.{Inject, Singleton}

import com.crud.service.MovieService
import com.twitter.finagle.http.Request
import com.twitter.finatra.http.Controller

/**
  * Created by Sem Babenko.
  */
@Singleton
class MovieController @Inject()(movieService: MovieService) extends Controller {

  get("/movies") { request: Request =>
    info("movies")
    movieService.getAll()
  }

}
