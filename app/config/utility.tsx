export function currencyFormat(
    num: string | number,
    withCurrency = false,
    withFree = false,
) {
    const _num = num.toString();
    let price = _num
        .replace('.', ',') // replace decimal point character with ,
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'); // use . as a separator

    if (withCurrency) {
        price = 'Rp' + price;
    }
    if (withFree && _num === '0') {
        price = 'Free';
    }
    return price;
}

export function getParsedDate(strDate) {
    var strSplitDate = String(strDate).split(' ');
    var date = new Date(strSplitDate[0]);
    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    // alert(date);
    var dd = date.getDate();
    var month = monthNames[date.getMonth()] //January is 0!
    date.get
    var yyyy = date.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    date = dd + " " + month + " " + yyyy;
    return date.toString();
}

export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}