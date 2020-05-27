class NegotiationView extends View {
    template(model) {
        return `
            <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${model.getAllNegotiations().map(negotiation => `
                    <tr>
                        <td>${negotiation.date.getDate()}/${negotiation.date.getMonth() + 1}/${negotiation.date.getFullYear()}</td>
                        <td>${negotiation.amount}</td>
                        <td>${negotiation.value}</td>
                        <td>${negotiation.bulk}</td>
                    </tr>
                    `).join('')}
            </tbody>
            
            <tfoot>
            </tfoot>
            </table>        
        `;
    }
}