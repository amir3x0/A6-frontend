export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-black to-purple-800 text-purple-200 p-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <p className="font-bold text-xl mb-4">Braude Web Course</p>
                    <p>This website is a result of a web course homework. It's made out of pure love and desire for food.</p>
                    <p className="mt-2">Made in 12\02\2024.</p>
                </div>
                
                <div>
                    <p className="font-bold text-xl mb-4">Contact</p>
                    <p className="space-y-1">
                        Amir: Amir.Mishayev@e.braude.ac.il<br/>
                        Dana: Dana.Soudry@e.braude.ac.il<br/>
                        Lital: lital.leschinsky@e.braude.ac.il<br/>
                        Michael: michael.trifonov@e.braude.ac.il
                    </p>
                </div>
                
                <div>
                    <p className="font-bold text-xl mb-4">Social</p>
                    <p className="space-y-1">
                        Facebook<br/>
                        Instagram<br/>
                        Twitter
                    </p>
                </div>
            </div>
        </footer>
    );
}
