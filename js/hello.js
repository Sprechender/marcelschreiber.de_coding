function cloneCheck(siteURL) {
    if (window.location.hostname == siteURL) {
        return true;
    }
    else {
        return false;
    }
}

function securityStuff(ignore) {
    if (ignore == true) {
        return;
    }

    if (window.location.hostname == cloneCheck("127.0.0.1") || cloneCheck("marcelschreiber.de") || cloneCheck("https://github.marcelschreiber.de/marcelschreiber.de_coding/")) {
        document.getElementById('wrong_domain_warning').style.display = "block";
    }
}