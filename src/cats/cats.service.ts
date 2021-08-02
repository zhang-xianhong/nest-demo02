import { HttpService } from "@nestjs/common";
import { Observable } from "rxjs";

export class CatsService {
    constructor(private readonly httpService: HttpService) {}

    // findAll(): Observable<AxiosResponse>
}