export default function Form() {
    return (
        <form>
        <label htmlFor="name">Name of Recipe:</label>
        <input type="text" id="name" name="name" /><br />
        <label htmlFor="name">Description:</label>
        <input type="text" id="description" name="description" /><br />
        <button type="submit">Submit</button>
        </form>
    );
}