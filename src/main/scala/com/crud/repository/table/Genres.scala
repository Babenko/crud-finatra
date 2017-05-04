package com.crud.repository.table

import com.crud.model.Genre
import slick.lifted.{Tag}
import slick.jdbc.H2Profile.api._

/**
  * @author Sem Babenko.
  */
class Genres(tag: Tag) extends Table[Genre] (tag, "GENRES") {

  def id = column[Int]("ID", O.PrimaryKey, O.AutoInc)
  def name = column[String]("NAME")
  def description = column[String]("DESCRIPTION")

  def * = (name, description, id.?) <> (Genre.tupled, Genre.unapply)
}
