package com.crud.service

import javax.inject.{Inject, Singleton}

import com.crud.model.Movie
import com.crud.repository.MovieRepository

/**
  * Created by Sem Babenko
  */
@Singleton
class MovieService @Inject() (movieRepository: MovieRepository) {

  def getAll() = movieRepository.getAll()

  def insert(movie: Movie) = movieRepository.insert(movie)

}
