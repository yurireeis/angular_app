import knot
import domain


# container bootstrap
container = knot.Container({
    'db.fqn': 'sqlite:///:memory:',
    'db.echo': False
})

domain.apply_to_container(container)

# Plain case
contato_repository = container('models_contato_repository')

# insert
contato = contato_repository.new(nome='Eleotério', telefone='9999-8888')
contato_repository.insert(contato)
print('User %s created with id %d' % (contato.nome, contato.id))


# find
query = contato_repository.create_query().\
    find_by_name('Eleotério')

found = contato_repository.find(query).one()
print('User %s was created at %s' % (found.nome, found.data))

# delete
contato_repository.delete(found)
found = contato_repository.find(query).all()
if len(found) == 0:
    print('Deleted success!')
