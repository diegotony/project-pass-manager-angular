import { TestBed } from '@angular/core/testing';
import { FirebaseService } from './firebase.service';
describe('FirebaseService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(FirebaseService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=firebase.service.spec.js.map