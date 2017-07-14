package com.crud.utils

import java.io.File

import com.github.tototoshi.csv.CSVReader

/**
  * Created by Sem Babenko.
  */
object PopulationUtils {

  def populateGenres() = CSVReader.open(new File("src/main/resources/csv/movie_metadata.csv")).allWithHeaders()
}
