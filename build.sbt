name := "crud-finatra"
organization := "com.crud"

version := "1.0.0-SNAPSHOT"

scalaVersion := "2.11.8"

fork in run := true

javaOptions ++= Seq(
  "-Dlog.service.output=/dev/stderr",
  "-Dlog.access.output=/dev/stderr")

resolvers += Resolver.sonatypeRepo("releases")

lazy val versions = new {
  val finatra = "2.10.0"
  val guice = "4.0"
  val logback = "1.1.7"
  val mockito = "1.9.5"
  val scalatest = "3.0.0"
  val scalacheck = "1.13.4"
  val specs2 = "2.4.17"
  val junit = "4.12"
  val h2 = "1.4.195"
  val slick = "3.2.0"
  val scalacsv = "1.3.4"
}

libraryDependencies ++= Seq(
  "com.twitter" %% "finatra-http" % versions.finatra,
  "ch.qos.logback" % "logback-classic" % versions.logback,
  "com.h2database" % "h2" % versions.h2,
  "com.typesafe.slick" %% "slick" % versions.slick,
  "com.typesafe.slick" %% "slick-hikaricp" % versions.slick,
  "com.github.tototoshi" %% "scala-csv" % versions.scalacsv,
  "ch.qos.logback" % "logback-classic" % versions.logback % "test",

  "com.twitter" %% "finatra-http" % versions.finatra % "test",
  "com.twitter" %% "inject-server" % versions.finatra % "test",
  "com.twitter" %% "inject-app" % versions.finatra % "test",
  "com.twitter" %% "inject-core" % versions.finatra % "test",
  "com.twitter" %% "inject-modules" % versions.finatra % "test",
  "com.google.inject.extensions" % "guice-testlib" % versions.guice % "test",

  "com.twitter" %% "finatra-http" % versions.finatra % "test" classifier "tests",
  "com.twitter" %% "inject-server" % versions.finatra % "test" classifier "tests",
  "com.twitter" %% "inject-app" % versions.finatra % "test" classifier "tests",
  "com.twitter" %% "inject-core" % versions.finatra % "test" classifier "tests",
  "com.twitter" %% "inject-modules" % versions.finatra % "test" classifier "tests",

  "junit" % "junit" % versions.junit % "test",

  "org.mockito" % "mockito-core" % versions.mockito % "test",
  "org.scalacheck" %% "scalacheck" % versions.scalacheck % "test",
  "org.scalatest" %% "scalatest" % versions.scalatest % "test",
  "org.specs2" %% "specs2-mock" % versions.specs2 % "test")
