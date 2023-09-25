import React from "react";

export default function PriceTable() {
  return (
    <div>
      <table>
        <thead>
          <td>Product/Dienst</td>
          <td>Prijs</td>
        </thead>
        <tr>
          <td>Banden (de) montage </td>
          <td>€ 11,00 per band</td>
        </tr>
        <tr>
          <td>Balanceren</td>
          <td>€ 6,00 per band</td>
        </tr>
        <tr>
          <td>Airco</td>
          <td>vanaf € 85,00</td>
        </tr>
        <tr>
          <td>Olie wisselbeurt</td>
          <td>vanaf € 80,00 prijs verschilt per auto</td>
        </tr>
        <tr>
          <td>Grote beurt</td>
          <td>Tussen € 200,00/ € 400,00</td>
        </tr>
        <tr>
          <td>APK keuring benzine</td>
          <td>€ 54,50</td>
        </tr>
        <tr>
          <td>APK keuring diesel</td>
          <td>€ 78,65</td>
        </tr>
        <tr>
          <td>werkzaamheden</td>
          <td>Op aanvraag</td>
        </tr>
        <tr>
          <td>Overige werkzaamheden</td>
          <td>Op aanvraag</td>
        </tr>
        <tr>
          <td>Werkplaatstarief per uur</td>
          <td>€ 72,50</td>
        </tr>
      </table>
      <h1>Prijslijst dyno runs en tuning</h1>
      <table>
        <thead>
          <td>Product/Dienst</td>
          <td>Prijs</td>
        </thead>
        <tr>
          <td>Chiptuning met vermogen uitdraai </td>
          <td>vanaf € 250,00</td>
        </tr>
        <tr>
          <td>Vermogen uitdraai</td>
          <td>€ 80,00</td>
        </tr>
        <tr>
          <td>Overige mogelijkheden zoals launch control </td>
          <td>Op aanvraag</td>
        </tr>
      </table>
    </div>
  );
}
