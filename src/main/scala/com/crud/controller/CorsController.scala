package com.crud.controller

import javax.inject.Singleton

import com.twitter.finagle.http.Request
import com.twitter.finatra.http.Controller

/**
  * Created by Sem Babenko.
  */
@Singleton
class CorsController extends Controller {

    options("/:*") { _ : Request => response.ok }
}
