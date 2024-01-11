include docker/.env

createdb:
	docker exec -it docker_moneyapp-postgres_1 createdb --username=$(POSTGRES_USER) --owner=$(POSTGRES_USER) $(POSTGRES_DB)

dropdb:
	docker exec -it docker_moneyapp-postgres_1 dropdb -U $(POSTGRES_USER) $(POSTGRES_DB)

migreteup:
	migrate -path docker/migrations -database "postgresql://$(POSTGRES_USER):$(POSTGRES_PASSWORD)@localhost:5432/$(POSTGRES_DB)?sslmode=disable" -verbose up

migretedown:
	migrate -path docker/migrations -database "postgresql://$(POSTGRES_USER):$(POSTGRES_PASSWORD)@localhost:5432/$(POSTGRES_DB)?sslmode=disable" -verbose down