.DEFAULT_GOAL := help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

init: ## Init project
	./scripts/init.sh

clean: ## Remove all you need
	./scripts/clean.sh

create-symlink: ## Create symlink from front development to front to serve
	./scripts/create-simlink.sh

remove-symlink: ## Remove symlink from front development to front to serve
	./scripts/remove-simlink.sh
