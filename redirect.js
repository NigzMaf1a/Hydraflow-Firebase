export default class Redirect {
    constructor(regtype){
        this.regtype = regtype;
    }
    async redirectUserBasedOnRegtype() {
        const regtype = this.regtype;
        switch (regtype){
            case 'Manager':
                window.location.href = "manager-dashboard.html";
                break;
            case 'Client':
                window.location.href = "client-dashboard.html";
                break;
            case 'Plumber':
                window.location.href = "plumber-dashboard.html";
                break;
            case 'Mason':
                window.location.href = "mason-dashboard.html";
                break;
            default:
                console.error("Invalid regtype:", regtype);
                alert("Invalid registration type. Please contact support.");
                break;
        }
    }
}