import React, { Component } from "react";

class Summaryrev extends Component {
  render() {
    return (
      <section class="container text-center">
        <div class="mt-5">
          <h1 class="mt-3">Summary of Review</h1>
          <table class="table mt-5 border border-secondary ">
            <thead>
              <tr>
                <th scope="col-2">total number of reviews</th>
                <th scope="col-2">last updated date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">5</th>
                <td>17-07-2021 10:43:12 AM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Summaryrev;
