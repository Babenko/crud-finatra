package com.crud

import com.crud.controller.{GenreController, MovieController, PingController}
import com.crud.filter.CorsFilter
import com.twitter.finagle.http.{Request, Response}
import com.twitter.finatra.http.HttpServer
import com.twitter.finatra.http.filters.{CommonFilters, LoggingMDCFilter, TraceIdMDCFilter}
import com.twitter.finatra.http.routing.HttpRouter

/**
  * @author Sem Babenko.
  */
object App extends AppServer

class AppServer extends HttpServer {

  override def defaultFinatraHttpPort = ":9999"

  override protected def configureHttp(router: HttpRouter): Unit = {
    router
      .filter[LoggingMDCFilter[Request, Response]]
      .filter[TraceIdMDCFilter[Request, Response]]
      .filter[CommonFilters]
      .filter[CorsFilter]
      .add[PingController]
      .add[GenreController]
      .add[MovieController]
  }
}
