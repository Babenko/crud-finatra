package com.crud.filter

import com.twitter.finagle.http.{Request, Response}
import com.twitter.finagle.{Service, SimpleFilter}
import com.twitter.util.Future

/**
  * Created by Sem Babenko.
  */
class CorsFilter extends SimpleFilter[Request, Response]{
  override def apply(request: Request, service: Service[Request, Response]): Future[Response] = {
    for(response <- service(request)) yield {
      Map("Access-Control-Allow-Origin" -> "*",
        "Access-Control-Allow-Methods" -> "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers" -> "Content-Type")
        .foreach(p => response.headerMap.add(p._1, p._2))
      response
    }
  }
}
