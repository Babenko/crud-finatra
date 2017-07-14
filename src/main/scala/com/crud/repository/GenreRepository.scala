package com.crud.repository

import javax.inject.Singleton

import com.crud.model.Genre
import com.crud.repository.table.Genres
import slick.lifted.TableQuery
import slick.jdbc.H2Profile.api._
import com.crud.repository.DB.connection
import com.crud.utils.PopulationUtils


/**
  * @author Sem Babenko.
  */
@Singleton
class GenreRepository {

  private val genre = TableQuery[Genres]
  private val setup = DBIO.seq(
    genre.schema.create,
    genre += Genre("Drama", "Something about drama"),
    genre += Genre("Action", "Something about action")
  )
  val setupFuture = connection.run(setup)

  def getAll() = connection.run(genre.result)

  def insert(nGenre: Genre) = connection.run(genre += nGenre)

  def demo() = connection.run(genre ++= PopulationUtils.populateGenres().map(map => Genre(map.getOrElse("genres", "None"), "")))

}
