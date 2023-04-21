
import { Area  } from "../../../../src/domain/entities/farm/area"


describe ('AREA', () => {

    test('valid all properties', () => {

        const total = 10;
        const area = new Area(total);
        
        expect(area.total).toBe(total);
        expect(area.convention).toBe("hectares");
    });

    test('valid convention when total < 2', () => {

        const total = 1;
        const area = new Area(total);
        
        expect(area.total).toBe(total);
        expect(area.convention).toBe("hectar");
    });

    test('the convention shoud be "hectares" when total >= 2', () => {

        const total = 2;
        const area = new Area(total);
        
        expect(area.convention).toBe("hectares");
    });

    test('throw error if total <= 0', () => {

        const total = -1;        
        expect(() => new Area(total)).toThrow(`total <= 0, value ${total}`);
    });
})