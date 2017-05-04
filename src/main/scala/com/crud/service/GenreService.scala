package com.crud.service

import javax.inject.{Inject, Singleton}

import com.crud.model.Genre
import com.crud.repository.GenreRepository

/**
  * @author Sem Babenko.
  */
@Singleton
class GenreService @Inject() (genreRepository: GenreRepository) {

  def getAll() = genreRepository.getAll()

  def insert(genre: Genre) = genreRepository.insert(genre)

}
