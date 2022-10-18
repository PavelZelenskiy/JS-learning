//T1

function getDateFormat (date, separator = '.') {
        const innerDate = new Date (date);
        //console.log(innerDate);
        const month = innerDate.getMonth() + 1;
        const day = innerDate.getDate();
        const year = innerDate.getFullYear();
       
        console.log(`${('0' + day).slice(-2)} ${separator} ${('0' + month).slice(-2)} ${separator} ${year}`);     
};

getDateFormat('February 11, 2002', '-');
getDateFormat('May 18, 2015');
getDateFormat('May 5, 2015');
getDateFormat('December 3, 2002', '-');
getDateFormat('September 3, 2022', '-');