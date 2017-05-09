package com.crud.service

import javax.inject.{Inject, Singleton}

import com.crud.model.Movie
import com.crud.repository.MovieRepository

/**
  * Created by Sem Babenko
  */
@Singleton
class MovieService @Inject() (genreRepository: MovieRepository) {

  def getAll() = genreRepository.getAll()

  def insert(movie: Movie) = genreRepository.insert(movie)

}
