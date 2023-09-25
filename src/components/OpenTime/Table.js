import React from 'react'
import "./Table.css"

export default function Table() {
  return (
      <table className='open-time'>
        <thead>
          <td>Dag</td>
          <td>Tijd</td>
        </thead>
        <tr>
          <td>Maandag t/m vrijdag</td>
          <td>09:00 - 18:00</td>
        </tr>
        <tr>
          <td>Zaterdag</td>
          <td>09:00 - 14:00</td>
        </tr>
        <tr>
          <td>Zondag</td>
          <td>Gesloten</td>
        </tr>
        <tr>
          <td>Feestdagen</td>
          <td>Word vermeld op de site</td>
        </tr>
        <tr>
          <td>Vakantie periode van 28 juli t/m 20 augustus </td>
          <td>Alleen op afspraak</td>
        </tr>
      </table>
  );
}
