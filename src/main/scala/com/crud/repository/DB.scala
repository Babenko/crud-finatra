package com.crud.repository

import slick.jdbc.H2Profile.api._

/**
  * @author Sem Babenko.
  */
object DB {
  val connection = Database.forConfig("db")
}
