const matches = require("../APIWork/matches.json");
const axios = require("axios");
const apiKey = process.env.APIKEY;
const baseUrl = "https://api.cricapi.com/v1/";
const matchesList = matches.data;

exports.getLiveMatches = (req, res) => {
  try {
    let liveMatches = [];
    matchesList.forEach((value) => {
      if (value.ms === "live") liveMatches.push(value);
    });

    res.status(200).json({
      status: "success",
      message: "LIVE MATCHES LIST",
      result: liveMatches.length,
      data: liveMatches,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      error: err,
    });
  }
};

exports.getUpcomingMatches = (req, res) => {
  try {
    let finishedMatches = [];
    matchesList.forEach((value) => {
      if (value.ms === "fixture") finishedMatches.push(value);
    });

    res.status(200).json({
      status: "success",
      message: "UPCOMING MATCHES LIST",
      result: finishedMatches.length,
      data: finishedMatches,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      error: err,
    });
  }
};

exports.getFinishedMatches = (req, res) => {
  try {
    let finishedMatches = [];
    matchesList.forEach((value) => {
      if (value.ms === "result") finishedMatches.push(value);
    });

    res.status(200).json({
      status: "success",
      message: "FINISHED MATCHES LIST",
      result: finishedMatches.length,
      data: finishedMatches,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      error: err,
    });
  }
};

exports.getSingleMatch = async (req, res) => {
  try {
    const { id } = req.params;
    const url = `https://api.cricapi.com/v1/match_scorecard?apikey=d9749b1c-7f96-4122-be72-7b5a0df9a163&id=${id}`;
    const response = await axios.get(url);
    console.log(response);
    res.status(200).json({
      status: "success",
      message: "GETTING SCORECARD!",
      matchData: response.data,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      error: err,
    });
  }
};
