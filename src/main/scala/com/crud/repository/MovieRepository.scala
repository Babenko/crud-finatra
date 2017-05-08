package com.crud.repository

import javax.inject.Singleton

import com.crud.model.{Genre, Movie}
import com.crud.repository.DB.connection
import com.crud.repository.table.Movies
import slick.lifted.TableQuery
import slick.jdbc.H2Profile.api._

/**
  * Created by Sem Babenko
  */
@Singleton
class MovieRepository {

  private val movie = TableQuery[Movies]
  private val setup = DBIO.seq(
    movie.schema.create,
    movie += Movie("Thron", "Something about Thron", 1)
  )
  private val setupFuture = connection.run(setup)

  def getAll() = connection.run(movie.result)

  def insert(nMovie: Movie) = connection.run(movie += nMovie)
}
