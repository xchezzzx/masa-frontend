import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "doubleMe" })

export class DoublePipe implements PipeTransform {
    public transform(value: number): number {
        return value * 2;
    }
 }