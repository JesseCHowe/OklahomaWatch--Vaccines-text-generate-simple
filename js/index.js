var tooltip = d3
  .select(".hiveChart_container")
  .append("div")
  .attr("class", "toolTip");
var tooltip2 = d3
  .select(".hiveChart_container")
  .append("div")
  .attr("class", "toolTip2");
d3.csv(
  "https://gist.githubusercontent.com/JesseCHowe/0e5388edc13edf1c454446dfdfacb7b9/raw/8037c1461731cb7edf41b4aee2f40b591343e5b6/ve_Vaccination%2520Rates%2520by%2520School.csv",
  type,
  function(error, data) {
    if (error) throw error;

       tooltip.style("display", "inline-block")
      .html(function(d) { 
           return "<h2>"+ "81%" + " Vaccination rate | 2% Exemption rate</h2>" +
             "<p><strong>"+"13</strong> percentage points"+ " " + "<strong>below</strong>" + "the national average | " +
             "<strong>12</strong> percentage points <strong>below</strong>" + " state average</p>" +         
"<p>This school is<strong>"+ " below" + "</strong> the needed vaccination rate for herd immunity, or the vaccination rate needed to protect those who are immunocompromised from diseases such as measles, mumps, and rubella.</p>" + 
             "<p><strong>" + "8" +"</strong> out of <strong>"+ "50" +"</strong> in <strong>"+ "TULSA" +"</strong> school district have a vaccination rate at or above herd immunity.</p>"+
"<p><strong>" + "37" +"</strong> out of <strong>"+ "123" +"</strong> in <strong>"+"TULSA" +"</strong> county have a vaccination rate at or above herd immunity.</p>";
                        });
    
    var select = d3.select(".menu div select");
    
    select.on("change", function(d) {
          myFunction()
      });
    
        select.selectAll("option")
      .data(data)
      .enter()
        .append("option")
        .attr("value", function (d) { return d.School; })
        .text(function (d) { return d.School; });
    
    
  }
);

function type(d) {
  if (!d.value) return;
  d.value = +d.value;
  return d;
}

        function myFunction() {
  var x = document.getElementById("mySelect").selectedIndex;
  var y = document.getElementById("mySelect").options;
          
             var select = d3.select(".menu div select");
        
          d3.csv(
  "https://gist.githubusercontent.com/JesseCHowe/0e5388edc13edf1c454446dfdfacb7b9/raw/8037c1461731cb7edf41b4aee2f40b591343e5b6/ve_Vaccination%2520Rates%2520by%2520School.csv",
  type,
  function(error, data) {
    if (error) throw error;

    
       tooltip.style("display", "inline-block")
      .html(function(d) {
         if(data[x].district_count_total > 1) {
           return "<h2>"+ 100*(data[x].value) + "% Vaccination rate | "+ 100*(data[x].exempt) +"% Exemption rate</h2>" +
  "<p><strong>"+Math.abs(Math.round((1000*(data[x].value - 0.943))/10))+ "</strong> percentage points <strong>" + data[x].perc_national_avg_simple + "</strong> the national average | <strong>" +
  Math.abs(Math.round(1000*(data[x].oklahoma_avg)/10))+ "</strong> percentage points <strong> " + data[x].oklahoma_avg_simple + "</strong> below state average</p>" +         
"<p>This school is <strong>"+ data[x].herd_immunity + "</strong> the needed vaccination rate for herd immunity, or the vaccination rate needed to protect those who are immunocompromised from diseases such as measles, mumps, and rubella.</p>" + 
             "<p><strong>" + data[x].district_count_vac +"</strong> out of <strong>"+ data[x].district_count_total +"</strong> in <strong>"+data[x].District +"</strong> school district have a vaccination rate at or above herd immunity.</p>"+
"<p><strong>" + data[x].count_vax_county +"</strong> out of <strong>"+ data[x].count_total_county +"</strong> in <strong>"+data[x].id +"</strong> county have a vaccination rate at or above herd immunity.</p>";
         
           
         }
         else{
           return "<h2>"+ 100*(data[x].value) + "% Vaccination rate | "+ 100*(data[x].exempt) +"% Exemption rate</h2>" +
  "<p><strong>"+Math.abs(Math.round((1000*(data[x].value - 0.943))/10))+ "</strong> percentage points <strong>" + data[x].perc_national_avg_simple + "</strong> the national average | <strong>" +
  Math.abs(Math.round(1000*(data[x].oklahoma_avg)/10))+ "</strong> percentage points <strong> " + data[x].oklahoma_avg_simple + "</strong> below state average</p>" +         
"<p>This school is <strong>"+ data[x].herd_immunity + "</strong> the needed vaccination rate for herd immunity, or the vaccination rate needed to protect those who are immunocompromised from diseases such as measles, mumps, and rubella.</p>" + 
"<p><strong>" + data[x].count_vax_county +"</strong> out of <strong>"+ data[x].count_total_county +"</strong> in <strong>"+data[x].id +"</strong> county have a vaccination rate at or above herd immunity.</p>";
         
         }
            });
  }
);
}