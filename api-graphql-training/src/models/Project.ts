import { Field, ID, InputType, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@ObjectType()
@Entity()
export class Project extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column()
    title!: string;

    @Field()
    @Column()
    description!: string;

    @Field(() => User)
    @ManyToOne(() => User, project => project.projects)
    createBy: User;
}

@InputType()
export class ProjectInput {
    @Field()
    title!: string;

    @Field()
    description!: string;
}