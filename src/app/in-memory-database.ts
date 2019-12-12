import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Category } from './pages/categories/shared/category.model';

export class InMemoryDatabase implements InMemoryDbService {
    createDb() {
        const categories: Category[] = [
            { id: 1, name: 'Moradia', descripion: 'Pagamentos de Contas da Casa' },
            { id: 2, name: 'Saúde', descripion: 'Plano de Saúde e Remédios' },
            { id: 3, name: 'Lazer', descripion: 'Cinema, parques, praia, etc' },
            { id: 4, name: 'Salário', descripion: 'Recebimento de Salário' },
            { id: 5, name: 'Freelas', descripion: 'Trabalhos como Freelancer' }
        ];
        return { categories };
    }
}
