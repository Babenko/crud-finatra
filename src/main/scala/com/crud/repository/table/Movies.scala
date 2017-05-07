package com.crud.repository.table

import com.crud.model.Movie
import slick.lifted.Tag
import slick.jdbc.H2Profile.api._

/**
  * Created by baben on 07.05.2017.
  */
class Movies (tag: Tag) extends Table[Movie] (tag, "Movies") {

  def id = column[Int]("ID", O.PrimaryKey, O.AutoInc)
  def genreId = column[Int]("GENRE_ID")
  def name = column[String]("NAME")
  def description = column[String]("DESCRIPTION")

  def * = (name, description, genreId, id.?) <> (Movie.tupled, Movie.unapply)
}
