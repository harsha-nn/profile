import React from 'react';
import './Db.css';
import 'tachyons';

const Db = () =>{
    return (
        <div  style={{'text-align':'center'}}>
        <article style={{'text-align':'center'}} className="flex-center">
            <table className="flex-center table" >
                <tr>
                    <th className="bg--dark-green th"> Support </th>
                    <th className="bg--dark-green th"> Upgrades </th>
                    <th className="bg--dark-green th"> Installations </th>
                </tr>
                <tr className="bg--light-green">
                    <td className="td">Oracle 10g,11g,12c </td>
                    <td className="td">Oracle 10g,11g,12c </td>
                    <td className="td">Oracle 10g,11g,12c </td>
                </tr>
                <tr className="bg--light-green">
                    <td className="td">Oracle RAC, RMAN, ASM </td>
                    <td className="td">Oracle RAC, RMAN, ASM </td>
                    <td className="td">Oracle RAC, RMAN, ASM </td>
                </tr>
                <tr>
                    <td className="td">Oracle OEM </td>
                    <td className="td">Oracle OEM </td>
                    <td></td>
                 </tr>
                 <tr>
                    <td className="td">Oracle Apps R11, R12.X </td>
                    <td className="td">Oracle Apps R11, R12.X </td>
                    <td className="td">Oracle Apps R11, R12.X  </td>
                 </tr>
                 <tr>
                    <td className="td">Sql Server</td>  
                    <td></td>
                    <td></td>                  
                 </tr>
                 <tr>
                    <td className="td">Postgresql</td>
                    <td className="td">Postgresql</td>
                    <td></td>
                 </tr>
            </table>
                <div className="card center mw5 f4" >
                <h1 class="f4 bold center mw5">Skills</h1>
                <ul class="list pl0 ml0 center mw5 ba b--light-silver br3">
                <li class="ph3 pv2 bb b--light-silver">Shell scripting</li>
                <li class="ph3 pv2 bb b--light-silver">Performance tuning</li>
                <li class="ph3 pv2 bb b--light-silver">Troubleshooting</li>
                <li class="ph3 pv2 bb b--light-silver">Migrations</li>
                <li class="ph3 pv2 bb b--light-silver">Automation</li>
                <li class="ph3 pv2 bb b--light-silver">EXP/IMP</li>
                <li class="ph3 pv2">RMAN</li>
                </ul>
                </div>
        </article>
        </div>
    );
}

export default Db;