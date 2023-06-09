import { IProducer, ProducerType } from "src/domain/entities/IProducer";
import { LegalPerson } from "src/domain/entities/LegalPerson";
import InvalidArgumentException from "src/domain/exceptions/invalidArgumentException";
import { PhysicalPerson } from "src/domain/entities/PhysicalPerson";
import { Farm } from "src/domain/entities/farm";
import { CreateProducerDto } from "@controllers/producer/dtos/createProducerDto";

export class ProducerFactory {

    static Create(dto: CreateProducerDto): IProducer {

        let instance: IProducer;
        let farm : Farm = new Farm(dto.nomeFazenda, dto.cidade, dto.estado, dto.culturas, dto.areaTotalAgricultavel, dto.areaTotalVegetacao);

        switch (dto.tipo) {

            case ProducerType.Legal:
                instance = new LegalPerson(dto.id, dto.nomeProdutor, dto.tipo, farm);
                break;

            case ProducerType.Phisical:
                instance = new PhysicalPerson(dto.id, dto.nomeProdutor, dto.tipo, farm);
                break;

            default:
                throw new InvalidArgumentException(`producer type not found ${dto.tipo}`);
        }

        return instance;
    }
} 