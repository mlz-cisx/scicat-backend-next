import { Prop } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

export class QueryableClass {
  @ApiProperty({
    type: String,
    description:
      "Indicate the user who created this record. This property is added and maintained by the system.",
  })
  @Prop({
    type: String,
    index: true,
    required: true,
  })
  createdBy: string;

  @ApiProperty({
    type: String,
    description:
      "Indicate the user who updated this record last. This property is added and maintained by the system.",
  })
  @Prop({
    type: String,
    required: true,
  })
  updatedBy: string;

  /**
   * NOTE: createdAt and updatedAt properties are handled automatically by mongoose when timestamps flag is set to true on a schema(https://mongoosejs.com/docs/guide.html#timestamps).
   * We still need to keep the fields available here because of the response model and swagger documentation. They are not required so we don't need to provide them manually on create/update.
   */
  @ApiProperty({
    type: Date,
    description:
      "Date and time when this record was created. This property is added and maintained by mongoose.",
  })
  @Prop({
    type: Date,
  })
  createdAt: Date;

  @ApiProperty({
    type: Date,
    description:
      "Date and time when this record was updated last. This property is added and maintained by mongoose.",
  })
  @Prop({
    type: Date,
  })
  updatedAt: Date;
}
