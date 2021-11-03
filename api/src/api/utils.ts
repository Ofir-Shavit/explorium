export function locationsToBoundingBox(latitude: number, longitude: number, padding: number = 0.01) {
    return [
        longitude - padding,
        latitude - padding,
        longitude + padding,
        latitude + padding,
    ];
}

export function parseXMLResponse(xmlString: string): number {
    return (xmlString.match(new RegExp('<tag k="amenity" v="school"/>', 'g')) || []).length;
}