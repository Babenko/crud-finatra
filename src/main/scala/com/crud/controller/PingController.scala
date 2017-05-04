package com.crud.controller

import com.twitter.finagle.http.Request
import com.twitter.finatra.http.Controller

/**
  * @author Sem Babenko.
  */
class PingController extends Controller {

  get("/ping") { request: Request =>
    info("ping")
    "pong"
  }
}
