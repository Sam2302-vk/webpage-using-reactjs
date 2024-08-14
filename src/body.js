function Body(){
    return(
        <div class="container">
            <div class="info">
               <table>
                <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Reg.no</th>
                    <th>Department</th>
                    <th>College Name</th>
                </tr>
                <tr>
                    <td>01</td>
                    <td>Sam Venkadesh Kumar G</td>
                    <td>720721106127</td>
                    <td>ECE</td>
                    <td>HICET</td>
                </tr>
                < tr>
                    <td>02</td>
                    <td>Vaishnavi S</td>
                    <td>720721106117</td>
                    <td>ECE</td>
                    <td>HICET</td>
                </tr>
               < tr>
                    <td>03</td>
                    <td>Praveen Kumar S</td>
                    <td>720721106084</td>
                    <td>ECE</td>
                    <td>HICET</td>
                </tr>
                < tr>
                    <td>04</td>
                    <td>Veeramanikandan S</td>
                    <td>720721106119</td>
                    <td>ECE</td>
                    <td>HICET</td>
                </tr>
                < tr>
                    <td>05</td>
                    <td>Mugesh C</td>
                    <td>720721106070</td>
                    <td>ECE</td>
                    <td>HICET</td>
                </tr>
               </table>
            </div>
            <div class="design">
            <div class="form">
                  <h2>Login to check</h2>
                  Username:<input type="text" for="name" placeholder="Username"></input>
                  Password:<input type="password" for="password" placeholder="Password"></input>
                  <button type="submit">Login</button>
            </div> 
            </div>
        </div>
    )
}
export default Body;