export default function Footer() {
    return (
        <div
            style={{
                borderTop: "1px solid #e2e8f0",
                width: "100%",
                height: "auto",
                padding: "1.45em 1.4em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
            <span
                className="main-title-color"
                style={{ fontSize: ".85rem", textAlign: "center" }}>
                Diseñado y{" "}
                <span role="img" aria-labelledby="computer">
                    💻
                </span>{" "}
                por Rodrigo Salmerón | Hecho con{" "}
                <span role="img" aria-labelledby="heart">
                    💜
                </span>{" "}
                y React
            </span>
        </div>
    );
}
