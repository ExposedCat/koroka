const loadMoreButton = $('#loadMore')
const fallbackErrorField = $('#fallback')
const cardsContainer = $('section.cards .row')

function updateData(users, page) {
    for (const user of users) {
        cardsContainer.append(`
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card">
                <img src="${user.avatar}" class="card-img-top" alt="Avatar">
                <div class="card-body">
                    <h5 class="card-title">${user.first_name}
                        ${user.last_name}
                    </h5>
                    <p class="card-text">${user.email}</p>
                </div>
            </div>
        </div>
        `)
    }
    if (page) {
        loadMoreButton.data('page', page)
    } else {
        loadMoreButton.hide()
    }
}

loadMoreButton.click(() => {
    const page = loadMoreButton.data('page')
    const url = `${apiEndpoint}?page=${page}`
    $.ajax({
        type: 'GET',
        url,
        success: data => {
            const { total_pages: totalPages, page: currentPage, data: users } = data
            if (!users.length) {
                fallbackErrorField.show()
                loadMoreButton.hide()
            } else {
                updateData(
                    users,
                    totalPages > currentPage ? currentPage + 1 : null
                )
            }
        },
        error: (_, textStatus, error) => {
            console.error(`Error: ${textStatus}`)
            console.error(error)
        }
    })
})