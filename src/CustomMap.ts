//Instruction to every other class on how they can be an argument to 'addMarker'
export interface Mappable{
    location: {
        lat: number;
        lng: number;
    };

    markerContent(): string;
    color: string;
}

export class CustomMap{
    private googleMap: google.maps.Map;     //googleMap is an instance of class Map

    constructor(divId: string){
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: { 
                lat: 0, 
                lng: 0
            }
        });
    }

    //typescript will restrict mappable to use the properties which are common to both User and Company here
    // addMarker(mappable: User | Company): void{

    addMarker(mappable: Mappable): void{
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });

            infoWindow.open(this.googleMap, marker);
        });
    }

}